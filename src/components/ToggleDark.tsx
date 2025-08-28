type Props = {
    onToggle: () => void;
    isDark?: boolean;
}

export default function ToggleDark({onToggle, isDark}: Props) {
    return (
    <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition cursor-pointer"
         onClick={onToggle}
        >
            {isDark ? 'Light Theme' : 'Dark Theme'}
        </button>
        
    </div>
    )
}