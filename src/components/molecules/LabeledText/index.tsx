import { Label } from "@/components/ui/label"

const LabeledText = ({
    label,
    text
}: LabeledText) => {

    function convertToKebabCase(str: string): string {
        return str
            .toLowerCase()
            .replace(/\s+/g, '-')
    }

    return (
        <div>
            <Label className="text-gray-500" htmlFor={convertToKebabCase(label)}>{label}</Label>
            <p className="text-black text-sm">{text}</p>
        </div>
    )
}

interface LabeledText {
    label: string;
    text: string | undefined;
}

export default LabeledText