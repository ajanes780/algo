# --  FREQUENCY COUNTER  PATTERN --  #

def same(arg1, arg2):
  if len(arg1) != len(arg2):
    print("False strings are different lengths")
    return False

  frequencyCounter1 = {}
  frequencyCounter2 = {}

  for x in arg1:
    if(x in frequencyCounter1.keys()):
      frequencyCounter1[x] += 1
    else:
      frequencyCounter1[x] = 0

  for x in arg2:
    if(x in frequencyCounter2.keys()):
      frequencyCounter2[x] += 1
    else:
      frequencyCounter2[x] = 0

  print(frequencyCounter1)
  print(frequencyCounter2)

  for key in frequencyCounter1.keys():
    if key not in frequencyCounter2.keys():
      print("key not found")
      return False

  for value in frequencyCounter1.values():
    if value not in frequencyCounter2.values():
      print("value not found")
      return False

  print("Strings match")
  return True


# same("hello", "hello")  # true
# same("helli", "hello") # key not found false
