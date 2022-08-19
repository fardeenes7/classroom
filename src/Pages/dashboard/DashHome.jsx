export default function DashHome({ colorTheme }) {
  return (
    <div>
      <div className={`${colorTheme.card}`}>
        <h1 className={`text-2xl font-bold lg:text-3xl xl:text-4xl`}>
          Latest Updates
        </h1>
      </div>
    </div>
  );
}
