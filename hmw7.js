// Регулярное выражение для поиска слов на https://regex101.com
// \b[^aA\s]{6,}\b


//Для ДЖС

const words="Wonderful Joyful Happiness Time Task Apple"
const pattern =/\b[^aA\s]{6,}\b/gm
const result=words.match(pattern)
console.log(result)
