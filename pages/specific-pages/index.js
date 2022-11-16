
export const SpecificPage = () => {
  // autocomplete for `text-red` works here ✅
  // autocomplete for `specific-text-red` does NOT work here ❌
  // if you comment the first config line in .vscode/settings.json then it works
  return <div className="specific-text-red"></div>
}