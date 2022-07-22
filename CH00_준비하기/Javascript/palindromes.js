let palindromes = [
  "스위스",
  "팥콩밭",
  "별똥별",
  "음악",
  "인도인",
  "필리핀",
  "다시합시다",
  "피카추",
  "여보안경안보여",
  "역삼역",
];
const contents = palindromes.filter((str) => {
  if (str === str.split("").reverse("").join("")) {
    return str;
  }
});

console.log(contents);
