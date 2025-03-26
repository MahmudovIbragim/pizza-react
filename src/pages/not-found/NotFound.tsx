import { ArrowLeft } from "lucide-react";
import Button from "../../shared/ui/button/Button";
import scss from "./NotFound.module.scss";
import notFound from "../../shared/assets/images/not-found.png";
const NotFound = () => {
  return (
    <div className={scss.NotFound}>
      <section>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.left_content}>
              <h1>Страница не найдена</h1>
              <p>
                Проверьте корректность введённого адреса или повторите попытку
                позже
              </p>
              <div className={scss.btns}>
                <Button orangeTheme={false}>
                  <ArrowLeft size={20} style={{ marginRight: 5 }} />
                  Перейти на главную
                </Button>
              </div>
            </div>
            <div className={scss.right_content}>
              <img
                src={notFound}
                alt="not found 404"
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
