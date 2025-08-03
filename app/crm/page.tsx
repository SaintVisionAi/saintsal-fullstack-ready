export default function CRMPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">CRM Dashboard</h1>
      <iframe
        src="https://app.gohighlevel.com/"
        className="w-full h-[80vh] mt-4"
        title="GHL CRM"
      />
    </div>
  );
}