import { randomizeNumberFromBoundaries } from "./utils";

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const VALUE_BOUNDARIES: [number, number] = [0, 10_000];

const createFakeBusinessInvoiceCosts = (
  topicName: string,
  color: string
) => {
  const fakeData = MONTHS.reduce<Record<string, number>>((map, month) => {
    map[month] = randomizeNumberFromBoundaries(...VALUE_BOUNDARIES);

    return map;
  }, {});

  return {
    topic: topicName,
    data: fakeData,
    color
  }
};

export const getFakeBusinessInvoicesByMonth = () => {
  return new Promise<ReturnType<typeof createFakeBusinessInvoiceCosts>[]>((resolve) => {
    setTimeout(() => {

      const firstFakeDataSet = createFakeBusinessInvoiceCosts('Rent', 'rgba(60, 75, 188, 0.7)');
      const secondFakeDataSet = createFakeBusinessInvoiceCosts('Raw materials', 'rgba(60, 188, 68, 0.7)');
      const thirdFakeDataSet = createFakeBusinessInvoiceCosts('Staff', 'rgba(188, 60, 60, 0.7)');
      return resolve([
        firstFakeDataSet,
        secondFakeDataSet,
        thirdFakeDataSet
      ]);
    }, 1_000);
  });
};
