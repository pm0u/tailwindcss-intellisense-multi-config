
export default function Home() {
  return (
    // autocomplete for `text-red` works here ✅
    // autocomplete for `specific-text-red` does not work here ✅
    <div className="text-red"></div>
  )
}
