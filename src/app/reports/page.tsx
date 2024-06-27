import { MONTHS, getFakeBusinessInvoicesByMonth } from "../_shared/__mocks__/fakeBusinessInvoiceCosts"
import { LineChart, LineChartProps } from "../_shared/components/LineChart";

export default async function Reports() {
  const reportsData = await getFakeBusinessInvoicesByMonth();

  const normalizedReportsData = reportsData.map<LineChartProps['data'][number]>(data => ({
    data: Object.values(data.data),
    label: data.topic,
    borderColor: data.color,
    backgroundColor: data.color,
    color: data.color,
    tension: 0.1
  }));

  return (
    <div
      className="w-full h-[500px]"
    >
      <LineChart
        chartLabels={MONTHS}
        data={normalizedReportsData}
      />
    </div>
  )
}
