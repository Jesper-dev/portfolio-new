import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.less?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
     <h1>Jesper</h1>
    </header>
  );
});
