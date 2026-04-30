type RawPageProps = {
  css: string;
  body: string;
};

export function RawPage({ css, body }: RawPageProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
