import {writeAsStringAsync, readAsStringAsync, deleteAsync, readDirectoryAsync} from 'expo-file-system';
import {DOC_FOLDER} from './constants';

const setItem = async (key: string, value: string) => await writeAsStringAsync(DOC_FOLDER+key, value);

const getItem = async (key: string) => await readAsStringAsync(DOC_FOLDER+key).catch(() => null)

const removeItem = async (key: string) => await deleteAsync(DOC_FOLDER+key, {idempotent: true});

const getAllKeys = async () => await readDirectoryAsync(DOC_FOLDER);

const Storage = { setItem, getItem, removeItem, getAllKeys };

export default Storage;