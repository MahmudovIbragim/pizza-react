import "./Checkbox.scss";

interface TypeProps {
  title: string;
  checked: boolean;
  onChange?: () => void;
}

const Checkbox = ({ title, checked, onChange }: TypeProps) => {
  return (
    <div className="checkbox">
      <input
        id="form-checkbox-1"
        checked={checked}
        name="checkbox"
        onChange={onChange}
        type="checkbox"
      />
      <label htmlFor="form-checkbox-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
        >
          <mask fill="white" id="checkbox-mask">
            <rect height="200" width="200"></rect>
          </mask>
          <rect
            mask="url(#checkbox-mask)"
            stroke-width="40"
            height="200"
            width="200"
          ></rect>
          <path stroke-width="15" d="M52 111.018L76.9867 136L149 64"></path>
        </svg>
        <span>{title}</span>
      </label>
    </div>
  );
};

export default Checkbox;
