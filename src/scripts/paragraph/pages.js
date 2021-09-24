export {

  dataType,
  string,
  defaultPage
}

const string = ``

const dataType = `
  <section class="paragraph__header paragraph__section">
    <h2 class="paragraph__name">
      типы данных
    </h2>
  </section>
    <section class="paragraph__content paragraph__section">
    <p class="paragraph__text">
      Все языки программирования содержат встроенные типы данных, но они часто отличаются друг от друга в
      разных
      языках.
    </p>
    <p class="paragraph__text">
      JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно
      определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также
      это значит, что вы можете использовать одну переменную для хранения данных различных типов.
    </p>
    <h3 class="paragraph__title">
      всего <span class="_highlight">8</span> типов данных
    </h3>
    <p class="paragraph__text">
      в JavaScript типы данных делятся на <span class="_highlight">2 вида</span>:
    </p>
    <h4 class="paragraph__subtitle">
      Примитивные:
    </h4>
    <ul class="paragraph__list" data-nav="subNavigations">
      <li class="paragraph__item">
        <a class="paragraph__link" id="string" href="string">
          string
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="number" href="number">
          number
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="bigint" href="bigint">
          bigint
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="undefined" href="undefined">
          undefined
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="null" href="null">
          null
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="boolean" href="boolean">
          boolean
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="symbol" href="symbol">
          symbol
        </a>
      </li>
    </ul>
    <h4 class="paragraph__subtitle">
      Структурированые:
    </h4>
    <ul class="paragraph__list" data-nav="subNavigations">
      <li class="paragraph__item">
        <a class="paragraph__link" id="object" href="object">
          object
        </a>
      </li>
    </ul>
    <h3 class="paragraph__title">
      Определение типов оператором <span class="_highlight">typeof</span>
    </h3>
    <p class="paragraph__text">
      Оператор <span class="_highlighter-rouge">typeof</span> возвращает строку, указывающую тип операнда.
      Синтаксис вызова этого оператора: <span class="_highlighter-rouge">typeof operand</span>. Например:
    </p>
    <div class="paragraph__code">
      <div class="paragraph__code_body">
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// string</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> "<span class="_green">строка</span>"); <span class="_gray">//
              "string"</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_blue">let</span> <span class="_purple">name</span> = "<span
              class="_green">Василий</span>";
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_gray">// "string"</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// number</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span><span class="_gray">.</span> <span
              class="_purple">log</span>(<span class="_blue">typeof</span> <span class="_red">42</span>);
            <span class="_gray">// "number"</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">Infinity</span>); <span class="_gray">//
              "number"</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_red">NaN</span>); <span class="_gray">// "number",
              несмотря на то, что смысл этого значения "Not-A-Number" (не число)</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// bigint</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_red">42n</span>); <span class="_gray">//
              "bigint"</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// undefined</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_blue">let</span> <span class="_purple">declaredButUndefinedVariable</span>;
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">declaredButUndefinedVariable</span>); <span
              class="_gray">// "undefined"</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// boolean</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">true</span>); <span class="_gray">//
              "boolean"</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">false</span>); <span class="_gray">//
              "boolean"</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// symbol</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">Symbol</span>()); <span class="_gray">//
              "symbol"</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// object</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> { <span class="_blue">a</span>: <span class="_red">1</span> });
            <span class="_gray">// "object"</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> [<span class="_red">1</span>, <span class="_red">2</span>, <span
              class="_red">3</span>]); <span class="_gray">// такая структура данных, как массив, тоже
              "object"</span>
          </div>
        </div>
      </div>
    </div>
    <p class="paragraph__text">
      У оператора <span class="_highlighter-rouge">typeof</span> есть исключения:
    </p>
    <div class="paragraph__code">
      <div class="paragraph__code_body">
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// null</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_blue">document</span>.<span
              class="_purple">querySelector</span>(<span class="_green">'not-element'</span>)) <span
              class="_gray">// "object",
              Значение null, для него typeof возвращает тип “object”, что является официально признанной
              ошибкой</span>
          </div>
        </div>
        <div class="paragraph__code_block">
          <div class="paragraph__code_line">
            <span class="_gray">// function</span>
          </div>
          <div class="paragraph__code_line">
            <span class="_purple">console</span>.<span class="_purple">log</span>(<span
              class="_blue">typeof</span> <span class="_purple">function</span>() {}) <span class="_gray">//
              "function", Для функций оператор
              typeof возвращает тип “function”, хотя в действительности функция не является отдельным
              встроенным
              типом языка</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="paragraph__footer paragraph__section">
    <h3 class="paragraph__title">
      справочники:
    </h3>
    <ul class="paragraph__list">
      <li class="paragraph__item">
        <a class="paragraph__link" id="mdn"
          href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures" target="_blank">
          mdn
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="learnJS" href="https://learn.javascript.ru/types" target="_blank">
          learn javascript
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="flowJS" href="http://jsflow.org/docs/types/" target="_blank">
          flow javascript
        </a>
      </li>
      <li class="paragraph__item">
        <a class="paragraph__link" id="metanit" href="https://metanit.com/web/javascript/2.2.php"
          target="_blank">
          metanit
        </a>
      </li>
    </ul>
  </section>
  `

const defaultPage = `
  <h2>Hello World<h2/>
  `