import {
  type FirestoreDataConverter,
  QueryDocumentSnapshot,
  type SnapshotOptions,
} from 'firebase/firestore';
import type { Wash } from '../interfaces/Washes';

export const fireBaseWashConverter: FirestoreDataConverter<Wash> = {
  toFirestore: (wash: Wash) => {
    const { id, ...data } = wash;
    return data;
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Wash => {
    const data = snapshot.data(options);
    return {
      ...data,
      id: snapshot.id,
    } as Wash;
  },
};
