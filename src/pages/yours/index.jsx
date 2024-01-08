import MainNavigation from "@/../Components/MainNavigation/MainNavigation";

export default function AddAStoryPage() {
  return (
    <div className="main">
      <MainNavigation />
      <form>
        <label>add your story</label>
        <input type="text"></input>
      </form>
    </div>
  );
}
