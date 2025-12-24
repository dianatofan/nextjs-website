'use client';

import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const Crossword = dynamic(() => import('@jaredreisinger/react-crossword'), {
  ssr: false,
});

// @jaredreisinger/react-crossword data format
export const data = {
  across: {
    1: {
      clue: 'Voluntary hypothermia in the harbor 🏊',
      answer: 'SWIM',
      row: 0,
      col: 5,
    },
    4: {
      clue: 'Where the colorful houses are',
      answer: 'NYHAVN',
      row: 2,
      col: 1,
    },
    6: {
      clue: 'Most famous restaurant',
      answer: 'NOMA',
      row: 4,
      col: 1,
    },
    9: {
      clue: 'Christmas dessert',
      answer: 'RISALAMANDE',
      row: 6,
      col: 2,
    },
    11: {
      clue: 'Where your wallet goes to cry',
      answer: 'STROGET',
      row: 8,
      col: 0,
    },
    14: {
      clue: 'Amusement park',
      answer: 'TIVOLI',
      row: 10,
      col: 1,
    },
    16: {
      clue: 'Christmas beer day',
      answer: 'JDAG',
      row: 12,
      col: 3,
    },
    17: {
      clue: 'Kebab land',
      answer: 'NORREBRO',
      row: 13,
      col: 7,
    },
  },

  down: {
    3: {
      clue: 'Pink cinema',
      answer: 'PALADS',
      row: 1,
      col: 4,
    },
    2: {
      clue: "Your hair's worst enemy 💨",
      answer: 'WIND',
      row: 0,
      col: 6,
    },

    7: {
      clue: "There's no bad weather, only bad ....",
      answer: 'CLOTHING',
      row: 5,
      col: 6,
    },

    8: {
      clue: 'Open-faced sandwich',
      answer: 'SMORREBROD',
      row: 5,
      col: 8,
    },
    10: {
      clue: 'The polite way to avoid small talk at supermarket',
      answer: 'NEJTAK',
      row: 6,
      col: 10,
    },
    18: {
      clue: 'Street food spot',
      answer: 'REFFEN',
      row: 13,
      col: 10,
    },
    5: {
      clue: 'Not a word, a feeling',
      answer: 'HYGGE',
      row: 2,
      col: 12,
    },
    19: {
      clue: "You\'re not a real Dane until this has been stolen from you",
      answer: 'BIKE',
      row: 13,
      col: 12,
    },
    13: {
      clue: 'How many days of summer does Copenhagen have in a year?',
      answer: 'ONE',
      row: 8,
      col: 13,
    },
    15: {
      clue: 'Bun with butter and cheese',
      answer: 'BMO',
      row: 11,
      col: 14,
    },
  },
};

function clueKey(direction, number) {
  return `${direction}:${String(number)}`;
}

export default function CrosswordFact() {
  const [activeClue, setActiveClue] = useState(null);
  const [hoverClueKey, setHoverClueKey] = useState(null);

  const [guesses, setGuesses] = useState(() => new Map());
  const [clueStatus, setClueStatus] = useState({});

  const acrossClues = useMemo(() => {
    return Object.entries(data.across)
      .map(([number, entry]) => ({
        direction: 'across',
        number: Number(number),
        ...entry,
      }))
      .sort((a, b) => a.number - b.number);
  }, []);

  const downClues = useMemo(() => {
    return Object.entries(data.down)
      .map(([number, entry]) => ({
        direction: 'down',
        number: Number(number),
        ...entry,
      }))
      .sort((a, b) => a.number - b.number);
  }, []);

  const clueCells = useMemo(() => {
    const out = {};
    const add = (direction, number, entry) => {
      const len = entry.answer.length;
      const cells = Array.from({ length: len }, (_, i) => {
        const row = entry.row + (direction === 'down' ? i : 0);
        const col = entry.col + (direction === 'across' ? i : 0);
        return { row, col };
      });
      out[clueKey(direction, number)] = cells;
    };

    Object.entries(data.across).forEach(([n, entry]) =>
      add('across', n, entry)
    );
    Object.entries(data.down).forEach(([n, entry]) => add('down', n, entry));
    return out;
  }, []);

  const clueAnswer = useMemo(() => {
    const out = {};
    Object.entries(data.across).forEach(
      ([n, entry]) => (out[clueKey('across', n)] = entry.answer)
    );
    Object.entries(data.down).forEach(
      ([n, entry]) => (out[clueKey('down', n)] = entry.answer)
    );
    return out;
  }, []);

  // progress %
  const totalClues = acrossClues.length + downClues.length;
  const correctCount = useMemo(
    () => Object.values(clueStatus).filter((s) => s === 'correct').length,
    [clueStatus]
  );
  const progressPct = totalClues
    ? Math.round((correctCount / totalClues) * 100)
    : 0;

  // active highlight color
  const activeKey = activeClue
    ? clueKey(activeClue.direction, activeClue.number)
    : null;
  const activeStatus = activeKey ? clueStatus[activeKey] : undefined;

  const crosswordTheme = useMemo(() => {
    const highlightBackground =
      activeStatus === 'correct'
        ? 'rgb(220, 252, 231)' // green-100
        : activeStatus === 'wrong'
          ? 'rgb(254, 226, 226)' // red-100
          : 'rgb(254, 249, 195)'; // yellow-100

    const focusBackground =
      activeStatus === 'correct'
        ? 'rgb(187, 247, 208)' // green-200
        : activeStatus === 'wrong'
          ? 'rgb(254, 202, 202)' // red-200
          : 'rgb(253, 230, 138)'; // yellow-200

    return { highlightBackground, focusBackground };
  }, [activeStatus]);

  function validateActiveIfComplete(nextGuesses, nextActiveClue) {
    if (!nextActiveClue) return;

    const key = clueKey(nextActiveClue.direction, nextActiveClue.number);
    const cells = clueCells[key];
    const answer = clueAnswer[key];
    if (!cells || !answer) return;

    const chars = cells.map(({ row, col }) =>
      (nextGuesses.get(`${row},${col}`) || '').toUpperCase()
    );

    if (!chars.every(Boolean)) return;

    const word = chars.join('');
    setClueStatus((prev) => ({
      ...prev,
      [key]: word === answer ? 'correct' : 'wrong',
    }));
  }

  function clueRowBg(key) {
    const status = clueStatus[key];
    const isActive = key === activeKey;
    const isHover = key === hoverClueKey;

    if (status === 'correct') return 'bg-green-100';
    if (status === 'wrong') return 'bg-red-100';
    if (isActive || isHover) return 'bg-yellow-100';
    return 'bg-transparent';
  }

  return (
    <div className="crosswordCard w-full h-full min-w-0 min-h-0 overflow-hidden bg-white">
      <div className="crosswordCard__layout w-full h-full">
        <div className="crosswordCard__grid relative">
          <div className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-primary shadow-sm">
            {progressPct}%
          </div>

          <Crossword
            data={data}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
            theme={crosswordTheme}
            onClueSelected={(direction, number) => {
              setActiveClue({ direction, number: Number(number) });
            }}
            onCellChange={(row, col, char) => {
              setGuesses((prev) => {
                const next = new Map(prev);
                const k = `${row},${col}`;
                const v = (char || '').toString().toUpperCase();
                if (!v) next.delete(k);
                else next.set(k, v);

                validateActiveIfComplete(next, activeClue);
                return next;
              });
            }}
            onCorrect={(direction, number) => {
              setClueStatus((prev) => ({
                ...prev,
                [clueKey(direction, number)]: 'correct',
              }));
            }}
          />
        </div>

        <div className="crosswordCard__clues bg-gray-50">
          <div className="crosswordCard__cluesInner">
            <div className="font-semibold mb-2 text-[11px] text-primary">
              Across
            </div>
            <ol className="list-none pl-0 space-y-1 text-[11px] leading-snug text-primary">
              {acrossClues.map((c) => {
                const key = clueKey('across', c.number);
                return (
                  <li
                    key={key}
                    className={`rounded-md px-2 py-1 transition-colors ${clueRowBg(key)}`}
                    onMouseEnter={() => setHoverClueKey(key)}
                    onMouseLeave={() => setHoverClueKey(null)}
                    onClick={() =>
                      setActiveClue({ direction: 'across', number: c.number })
                    }
                  >
                    <span className="font-medium">{c.number}.</span> {c.clue}
                  </li>
                );
              })}
            </ol>

            <div className="font-semibold mt-4 mb-2 text-[11px] text-primary">
              Down
            </div>
            <ol className="list-none pl-0 space-y-1 text-[11px] leading-snug text-primary">
              {downClues.map((c) => {
                const key = clueKey('down', c.number);
                return (
                  <li
                    key={key}
                    className={`rounded-md px-2 py-1 transition-colors ${clueRowBg(key)}`}
                    onMouseEnter={() => setHoverClueKey(key)}
                    onMouseLeave={() => setHoverClueKey(null)}
                    onClick={() =>
                      setActiveClue({ direction: 'down', number: c.number })
                    }
                  >
                    <span className="font-medium">{c.number}.</span> {c.clue}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .crosswordCard__layout {
          height: 100%;
          display: grid;
          grid-template-rows: 75% 25%;
          min-height: 0;
          min-width: 0;
        }

        .crosswordCard__grid {
          min-height: 0;
          min-width: 0;
          overflow: hidden;
          border-bottom: 1px solid #e5e7eb;
        }

        .crosswordCard .crossword__grid {
          width: 100%;
          height: 100%;
        }

        .crosswordCard .crossword__grid svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .crosswordCard .crossword__clues {
          display: none;
        }

        .crosswordCard__clues {
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          padding: 10px 12px;
        }

        .direction .header {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
