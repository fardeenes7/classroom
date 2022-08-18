export default function Header({ title }) {
  return (
    <div className="flex w-full items-center justify-start gap-4 px-4 py-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="absolute right-8 flex items-center gap-4 rounded-xl bg-white py-2 px-4 text-sm font-bold">
        Fardeen Ehsan
        <img
          src="https://us.123rf.com/450wm/gmast3r/gmast3r1710/gmast3r171002485/88771602-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg?ver=6"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
}
