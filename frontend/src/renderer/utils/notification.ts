const enum PERMISSION_STATUS {
  GRANTED = 'granted',
  DENIED = 'denied',
}

export const createNotification: (
  title: string, description: string,
) => void = (title, description) => {
  if (Notification.permission === PERMISSION_STATUS.GRANTED) {
    const notification = new Notification(title, {
      body: description,
    });
  }

  return;
};
