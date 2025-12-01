/**
 *
 * O(n * 4^n) time | O(n * 4^n) space
 * where n = the length of the phoneNumbrer
 */
export function phoneNumberMnemonics(phoneNumber: string): string[] {
  const currentMnemonic: string[] = new Array(phoneNumber.length).fill('0');
  const mnemonicsFound: string[] = [];

  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
  return mnemonicsFound;
}

function phoneNumberMnemonicsHelper(
  idx: number,
  phoneNumber: string,
  currentMnemonic: string[],
  mnemonicsFound: string[]
) {
  if (idx === phoneNumber.length) {
    mnemonicsFound.push(currentMnemonic.join(''));
  } else {
    const digit: string = phoneNumber[idx];
    const letters: string[] = DIGIT_LETTERS[digit];
    for (const letter of letters) {
      currentMnemonic[idx] = letter;
      phoneNumberMnemonicsHelper(
        idx + 1,
        phoneNumber,
        currentMnemonic,
        mnemonicsFound
      );
    }
  }
}

const DIGIT_LETTERS: { [digit: string]: string[]; } = {
  '0': ['0'],
  '1': ['1'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};
