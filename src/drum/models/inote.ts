export interface INoteOptions {
  isEnabled?: boolean;
  velocity?: number;
}

export interface INote {
  sound: string;
  isEnabled: boolean;
  velocity: number;

  play();
}
