import { makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const customStyle = {
  lineHeight: '1.25',
  fontSize: '1.5em',
};

const codeTagProps = {
  lineHeight: 'inherit',
  fontSize: 'inherit',
};

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        codeTagProps={codeTagProps}
        customStyle={customStyle}
        language='javascript'
        children={value}
        showLineNumbers={true}
      />
    );
  },
};

const PostMarkdown = ({ value }) => {
  const styles = useStyle();
  return (
    <ReactMarkdown
      className={styles.container}
      renderers={renderers}
      source={value}
    />
  );
};

const useStyle = makeStyles({
  container: {
    fontSize: '1.25em',
  },
});

export default PostMarkdown;
