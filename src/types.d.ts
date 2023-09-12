export interface IImage {
  type: 'image';
  imageLabel?: string;
  imageLink: string;
  columns: 1 | 2;
}

export interface ISlider {
  type: 'slider';
  images: { imageLink: string; imageLabel: string }[];
  columns: 2;
}

export interface IText {
  type: 'text';
  textContent: string;
  columns: 1 | 2;
}

export type ContentType = IImage | IText | ISlider;

export interface IPage {
  title: string;
  content: ContentType[];
}

interface IEvent {
  id: string;
  title: string;
  banner: string;
  description: string;
  begin: Date;
  end: Date;
  created: Date; //дата створення події
  content: ContentType[];
}