export default function Deprecated_DarkModeToggle({ isDark, onToggle }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black z-10"
        >
            {isDark ? "라이트모드" : "다크모드"}
        </button>
    );
}