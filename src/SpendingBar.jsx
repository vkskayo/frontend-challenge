export function SpendingBar({ num }) {
  console.log(num);
  const barSize = {
    /*    width: 30, */
    height: num * 3,
    backgroundColor: "hsl(10, 79%, 65%)",
    borderRadius: 3,
  };
  return <div style={barSize} className="spending-bar col-12"></div>;
}
