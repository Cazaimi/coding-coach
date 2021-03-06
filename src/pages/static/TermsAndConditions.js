import React from 'react';
import MarkdownReader from 'components/markdownReader/MarkdownReader';
import termsAndConditions from './TermsAndConditions.md';

function TermsAndConditions() {
  return <MarkdownReader content={termsAndConditions} />;
}

export default TermsAndConditions;
