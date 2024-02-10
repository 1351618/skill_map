// app/[id]/page.tsx
interface Props {
  params: {
    id: string[];
  };
}
export default function ResumeTemplates({ params }: Props) {
  return (
    <div className="resume-templates">
      ResumeTemplates id {JSON.stringify(params)}
    </div>
  );
}
