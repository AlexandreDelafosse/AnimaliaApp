import { db } from '../../firebase';

export const getDailyAnimal = async () => {
  const doc = await db.collection('Animals').doc('TyrannosaurusRex').get();
  return doc.data();
};
