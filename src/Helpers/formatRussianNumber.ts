export const formatRussianNumber = (value: number | string): string => {
	/**
	 * Форматирует число в русский формат с пробелами между разрядами и копейками
	 * @param value Число или строка для форматирования
	 * @returns Отформатированная строка (например: "12 345", "12 345,30")
	 */

	// Преобразуем в число
	const num = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;

	// Проверяем, что получили валидное число
	if (isNaN(num)) {
		throw new Error('Invalid number provided');
	}

	// Разделяем на рубли и копейки
	const [rubles, kopecks] = num.toFixed(2).split('.');

	// Форматируем рубли с разделением пробелами
	const formattedRubles = rubles.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

	// Проверяем копейки
	const hasKopecks = kopecks !== '00';

	// Собираем результат
	return hasKopecks
		? `${formattedRubles},${kopecks}`
		: formattedRubles;
};