import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Section, Container } from '../../components';
import previews, { PreviewItem } from '../../previews';

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
    <Layout title={detailMeta?.title}>
      {renderPreviewDetail}
      <Section title="Properties" container disableDivider>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>props json</th>
            <td colSpan={3}>{detailMeta && JSON.stringify(detailMeta, null, 2)}</td>
          </tr>
          <tr>
            <th>children</th>
            <td><code>`ReactNode`</code></td>
            <td><code>`null`</code></td>
            <td>...</td>
          </tr>
          </tbody>
        </table>
      </Section>
    </Layout>
  );
};

export default Preview;
