function getDays(month: number, year: number): number {
  // month is 1-based (Jan = 1, Dec = 12)
  return new Date(year, month, 0).getDate();
}

// ✅ Example usage:
console.log(getDays(2, 2024)); // 29 (leap year)
console.log(getDays(2, 2023)); // 28
console.log(getDays(11, 2025)); // 30
console.log(getDays(12, 2025)); // 31
