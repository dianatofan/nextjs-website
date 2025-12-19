import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { KHR_materials_pbrSpecularGlossiness } from 'three/examples/jsm/loaders/KHR_materials_pbrSpecularGlossiness';

export function extendGLTFLoader(loader: GLTFLoader) {
  loader.register(
    (parser) => new KHR_materials_pbrSpecularGlossiness(parser)
  )
}
