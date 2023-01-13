export const dateCheck = (value: string) => {
	let cardDate = value;
	if(cardDate.at(-1) !== '/' || cardDate.length !== 3) cardDate = numberCheck(cardDate)
	if (cardDate.length === 2 && Array.from(cardDate).every((item) => typeof +item === 'number' && !isNaN(+item))){
		cardDate = `${cardDate}/`;
	}

	return cardDate.length > 5 ? cardDate.slice(0, 5) : cardDate;
};

export const numberCheck = (value: string) => {
	let number;
	const newVal = value;
	if(!isNaN(+newVal[newVal.length - 1])) number = value;
	else number = value.slice(0, -1);
	return number
};