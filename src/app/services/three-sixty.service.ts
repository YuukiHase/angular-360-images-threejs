import { Injectable } from '@angular/core';
import { Camera, Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeSixtyService {
  private _scene!: Scene;
  private _camera!: Camera;
  private _renderer!: WebGLRenderer;

  public get scene(): Scene {
    return this._scene;
  }

  public set scene(scene: Scene) {
    this._scene = scene;
  }

  public get camera(): Camera {
    return this._camera;
  }

  public set camera(camera: Camera) {
    this._camera = camera;
  }

  public get renderer(): WebGLRenderer {
    return this._renderer;
  }

  public set renderer(renderer: WebGLRenderer) {
    this._renderer = renderer;
  }

  constructor() {}

  initView(container: HTMLElement): void {
    this.scene = new Scene();
    this.scene.background = new Color('#FFFFFF');
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;
    this.renderer.render(this.scene, this.camera);
  }
}
