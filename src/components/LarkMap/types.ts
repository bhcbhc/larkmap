import type { ReactNode } from 'react';
import type { IMapConfig, IMapWrapper, ISceneConfig, Scene } from '@antv/l7';
import type { CommonProps } from '@/types';

import type { LayerManager } from '@/utils';

export type LarkMapContextValue = {
  scene: Scene;
  layerManager: LayerManager;
};

export interface LarkMapRefAttributes {
  /** 获取 Scene 实例 */
  getScene: () => Scene;
  /** 获取 Map 实例 */
  getMap: () => Scene['map'];
}

export interface LarkMapProps extends CommonProps, Omit<ISceneConfig, 'id' | 'canvas' | 'map'> {
  /** 地图类型 */
  mapType?: 'GaodeV1' | 'GaodeV2' | 'Mapbox' | 'Map';
  /** 地图实例，可选，也可以通过配置项自动生成实例 */
  map?: IMapWrapper;
  /**
   * 地图配置项
   * 配合地图类型配置地图，
   * 配置项详见 [L7-Map](https://l7.antv.vision/zh/docs/api/map/map)
   * */
  mapOptions?: Partial<IMapConfig>;
  children?: ReactNode;
  /** 场景加载成功回调 */
  onSceneLoaded?: (scene: Scene) => void;
}
