export const getIconPath = (file: string, isMoment?: boolean) => `/img/icons/${isMoment ? 'moments/' : ''}${file}`;
export const getImagePath = (file: string, isVertical?: boolean) => `/img/projects/${isVertical ? 'vertical' : 'horizontal'}/${file}`;
