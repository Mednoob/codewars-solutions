var Sudoku = function(data) 
{
  return {
    isValid: function() {
      const sqrt = Math.sqrt(data.length);
      if (sqrt % 1) return false;
      if (!data.every(x => x.length === data.length)) return false;

      const boxes = [];

      for (let n = 0; n < data.length; n += sqrt) {
        const rows = data.slice(n, n + sqrt);
        for (let m = 0; m < data.length; m += sqrt) {
          const data = [];
          const sliced = rows.map(x => x.slice(m, m + sqrt));
          for (const row of sliced) {
            data.push(...row);
          }
          boxes.push(data);
        }
      }

      return boxes.every(b => {
        for (let x = 1; x <= data.length; x++) {
          if (!b.includes(x)) return false;
        }

        return true;
      })
    }
  };
};
