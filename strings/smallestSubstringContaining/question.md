### Smallest Substring Containing

Given two non-empty strings: a big string and a small string. Write a function
that returns the smallest subsring in the big string that contains all of the
small string's characters.

Note that:

- The substring can contain other characters not found in the small string.
- The characters in the substring don't have to be in the same order as they
  in the small string.
- If the small string has duplicate characters, the substring has to contain
  those duplicate characters (it can also contain more, but not fewer).

Assume that there will be one relevant smallest substring.

E.g: "abcd\$ef\$axb\$c\$". Answer: "$$abf"
