import dayjs from 'dayjs';

export const formatDate = (date: string | Date, format = 'MMM DD YYYY') => dayjs(date).format(format);
