import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components';
import previews, { PreviewItem } from './Previews';

const Preview = () => {
  const params = useParams();

  const [ detailMeta, setDetailMeta ] = useState<PreviewItem['meta'] | null>(null);

  const renderPreviewDetail = useMemo(() => {
    const id = params.id;
    const preview = id && previews[id];

    if (preview) {
      setDetailMeta(preview.meta);

      return (
        <>{preview.node}</>
      );
    }

    setDetailMeta(null);

    return (
      <>No preview was found</>
    );
  }, [ params ]);

  return (
    <Layout>
      {renderPreviewDetail}
      <br />
      {detailMeta && JSON.stringify(detailMeta, null, 2)}
    </Layout>
  );
};

export default Preview;
