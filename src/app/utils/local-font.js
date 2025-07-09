import localFont from 'next/font/local';

export const metropolis = localFont({
  src: [
    {
      path: '../fonts/Metropolis/Metropolis-Regular.otf',
      weight: '400',
      style: 'normal',
      format: 'opentype',
    },
    {
      path: '../fonts/Metropolis/Metropolis-Medium.otf',
      weight: '500',
      style: 'normal',
      format: 'opentype',
    },
    {
      path: '../fonts/Metropolis/Metropolis-SemiBold.otf',
      weight: '600',
      style: 'normal',
      format: 'opentype',
    },
    {
      path: '../fonts/Metropolis/Metropolis-Bold.otf',
      weight: '700',
      style: 'normal',
      format: 'opentype',
    },
  ],
});

// export const nauryz = localFont({
//   src: [
//     {
//       path: '../fonts/Nauryz/Nauryz.ttf',
//       weight: '400',
//       style: 'normal',
//       format: 'truetype',
//     },
//   ],
// });
