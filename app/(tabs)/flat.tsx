import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

const dados = [
    {
        id: '1', titulo: 'React Hooks',
        sub: 'useState, useEffect'
    },
    {
        id: '2', titulo: 'Navegação',
        sub: 'Stack, Tab, Drawer'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },{
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
    {
        id: '3', titulo: 'Estilização',
        sub: 'StyleSheet, FlexBox'
    },
];

const Item = ({ item, index }) => (
    <View style={[
        styles.item,
        {
            borderLeftColor: '#06B6D4'
        }
    ]}>
        <View style={styles.avatar}>
            <Text style={styles.num}>
                {index + 1}
            </Text>
        </View>
        <View>
            <Text style={styles.titulo}>
                {item.titulo}
            </Text>
            <Text style={styles.sub}>
                {item.sub}
            </Text>
        </View>
    </View>
);

export default function App() {
    return (
        <FlatList
            data={dados}
            keyExtractor={i => i.id}
            renderItem={({ item, index }) =>
                <Item item={item} index={index} />}
            contentContainerStyle={styles.lista}
            ItemSeparatorComponent={() =>
                <View style={styles.separador} />}
        />
    );
}

const styles = StyleSheet.create({
    lista: { padding: 13 },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#1A2332',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderLeftWidth: 4,
    },
    avatar: {
        width: 38, height: 38,
        borderRadius: 19,
        backgroundColor: '#14B8A6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    num: { color: '#fff', fontWeight: 'bold' },
    titulo: {
        fontSize: 14, fontWeight: 'bold',
        color: '#E2E8F0'
    },
    sub: { fontSize: 12, color: '#64748B' },
    separador: { height: 5 },
});
