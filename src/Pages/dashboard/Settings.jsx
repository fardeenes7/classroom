export default function Settings({ themes, colorTheme, setTheme }) {
  return (
    <div>
      <div className={`${colorTheme.card}`}>
        <h1 className={`text-2xl font-bold lg:text-3xl xl:text-4xl`}>
          Settings
        </h1>
      </div>
      <div className={`${colorTheme.card}`}>
        {themes.map((theme) => (
          <button
            onClick={() => setTheme(theme)}
            className={`${colorTheme.button} w-24 rounded-lg py-2 px-4`}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
