import { collection, doc, addDoc, setDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import type {
  CollectionReference,
  FieldPath,
  FirestoreDataConverter,
  QueryConstraint,
  SetOptions,
  WhereFilterOp,
} from "firebase/firestore";

import { hasOwnProperty } from "javascript-yesterday";

import firestore from "../firestore";

type CollectionOptions<T> = {
  converter: FirestoreDataConverter<T>;
};

class Collection<T extends {} = {}> {
  public name: string;
  private $ref: CollectionReference<T>;
  private $converter: FirestoreDataConverter<T>;

  constructor(name: string, options: CollectionOptions<T>) {
    this.name = name;

    const { converter } = options;
    this.$converter = converter;
    this.$ref = this.$collection();
  }

  private $collection() {
    return collection(firestore, this.name).withConverter(this.$converter);
  }

  private $doc(...segments: string[]) {
    return doc(firestore, this.name, ...segments).withConverter(this.$converter);
  }

  public async addDoc(data: T) {
    await addDoc(this.$ref, data);
  }

  public async setDoc(data: Partial<T>, options: SetOptions = { merge: true }) {
    if (hasOwnProperty(data, "id") && typeof data.id === "string") {
      return await setDoc(this.$doc(data.id), data, options);
    }
    throw new Error(`Invalid ${this.name} id`);
  }

  public async getDoc(...segments: string[]) {
    return await getDoc(this.$doc(...segments));
  }

  public async getDocs() {
    return await getDocs(this.$ref);
  }

  public async query(
    getConstraints: (
      where: <P extends (string & {}) | FieldPath | Exclude<keyof T, symbol | number>>(
        fieldPath: P,
        opStr: WhereFilterOp,
        value: unknown
      ) => QueryConstraint
    ) => QueryConstraint[]
  ) {
    const q = query(this.$ref, ...getConstraints(where));

    return await getDocs(q);
  }
}

export default Collection;
