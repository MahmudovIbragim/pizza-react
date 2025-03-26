import { User } from "lucide-react";
import scss from "./DropDown.module.scss";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

interface TypeProps {
  openDrop: boolean;
  setOpenDrop: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDown = ({ openDrop, setOpenDrop }: TypeProps) => {
  const navigate = useNavigate();
  return (
    <div className={scss.DropDown}>
      <Button orangeTheme={false} onClick={() => setOpenDrop(!openDrop)}>
        <User size={20} />

        <p> Страницы</p>
      </Button>
      <div
        className={`${scss.drop_content} ${openDrop && scss.open_drop_content}`}
      >
        <button
          onClick={() => {
            navigate("/favorite");
            setOpenDrop(false);
          }}
          disabled={openDrop ? false : true}
        >
          Нравится
        </button>
        <button
          onClick={() => {
            navigate("/add-card");
            setOpenDrop(false);
          }}
          disabled={openDrop ? false : true}
        >
          Создать
        </button>
      </div>
    </div>
  );
};

export default DropDown;
