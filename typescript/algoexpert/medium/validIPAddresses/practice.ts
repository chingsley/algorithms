

{
  {
    function validIPAddresses(string: string) {
      const result: string[] = [];

      for (let first = 0; first < 3; first++) {
        const val1 = string.slice(0, first + 1);
        if (!isValidByte(val1)) continue;

        for (let second = first + 1; second <= first + 3; second++) {
          const val2 = string.slice(first + 1, second + 1);
          if (!isValidByte(val2)) continue;

          for (let third = second + 1; third <= second + 3; third++) {
            const val3 = string.slice(second + 1, third + 1);
            const val4 = string.slice(third + 1);
            if (!isValidByte(val3) || !isValidByte(val4)) continue;

            result.push([val1, val2, val3, val4].join('.'));
          }
        }
      }

      return result;
    }

    function isValidByte(value: string): boolean {
      const num = parseFloat(value);
      if (num < 0 || num > 255) return false;
      return num.toString().length === value.length;
    }


    console.log(
      validIPAddresses("1921680")
    );


    /**
     * 1 9 2 1 6 8 0   <- values
     * 0 1 2 3 4 5 6   <- indices
     *
     * f     s      t
     * 0     1      2       ...rest
     * 0     1      23      ...rest
     * 0     1      234     ...rest
     * 0     12     3       ...rest
     * 0     12     34      ...rest
     * 0     12     345     ...rest
     * 0     123    4       ...rest
     * 0     123    45      ...rest
     * 0     123    456     ...rest
     *
     * 01     2      3       ...rest
     * 01     2      34      ...rest
     * 01     2      345     ...rest
     * 01     23     4       ...rest
     * 01     23     45      ...rest
     * 01     23     456     ...rest
     * 01     234    5       ...rest
     * 01     234    56      ...rest
     * 01     234    567     ...rest
     *
     * 012     3      4       ...rest
     * 012     3      45      ...rest
     * 012     3      456     ...rest
     * 012     34     5       ...rest
     * 012     34     56      ...rest
     * 012     34     567     ...rest
     * 012     345    6       ...rest
     * 012     345    67      ...rest
     * 012     345    678     ...rest
     */
  }
  {
    // export function validIPAddresses2(string: string) {
    //   const result: string[] = [];

    //   for (let first = 1; first < 4; first++) {  // slice: 0-1, 0-2, 0-3
    //     const val1 = string.slice(0, first);
    //     if (!isValidByte(val1)) continue;

    //     for (let second = first + 1; second < first + 4; second++) {
    //       const val2 = string.slice(first, second);
    //       if (!isValidByte(val2)) continue;

    //       for (let third = second; third <= second + 4; third++) {
    //         const val3 = string.slice(second, third);
    //         const val4 = string.slice(third);
    //         if (!isValidByte(val3) || !isValidByte(val4)) continue;

    //         result.push([val1, val2, val3, val4].join('.'));
    //       }
    //     }
    //   }

    //   return result;
    // }
  }
}