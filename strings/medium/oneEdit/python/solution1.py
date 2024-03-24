# O(n) time | O(1) space
# n = length of the shorter string
def oneEdit(stringOne, stringTwo):
  if abs(len(stringOne) - len(stringTwo)) > 1:
      return False

  i, j = 0, 0
  editUsed = False
  while i < len(stringOne) and j < len(stringTwo):
      if stringOne[i] == stringTwo[j]:
          i, j = i + 1, j + 1
      else:           
          if editUsed:
              return False

          editUsed = True
          if len(stringOne) > len(stringTwo):
              i += 1
          elif len(stringTwo) > len(stringOne):
              j += 1
          else:
              i, j = i + 1, j + 1
          
  return True