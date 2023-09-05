import Link from 'next/link'
import styles from './styles.module.scss'
import Footer from '@/src/components/common/Footer'

export default function PrivacyPolitics() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className={styles.h1}>Políticas de Privacidade</h1>
                <p>Nós, da Trattoria Fedeli, valorizamos a privacidade e a segurança de nossos clientes e visitantes. Nossa política de privacidade descreve como lidamos com suas informações pessoais e segurança.</p>
                <h1 className={styles.h1}>Informações Coletadas</h1>
                <p>Nós coletamos informações fornecidas por você, como nome, endereço, endereço de e-mail e informações de pagamento. Essas informações são protegidas e usadas apenas para fins de cobrança. Também coletamos informações sobre os bens consumidos no estabelecimento.</p>
                <h1 className={styles.h1}>Uso de Informações</h1>
                <p>Nossos serviços incluem usar as informações que coletamos para fins de cobrança ou para responder a pedidos, perguntas e reivindicações. Podemos compartilhar suas informações com nossos provedores de serviço para garantir o bom funcionamento do nosso sistema e que os serviços sejam oferecidos de maneira eficaz. Também fazemos uso do perfil de consumo dos clientes para fins promocionais ou de possíveis novos produtos no estabelecimento.</p>
                <h1 className={styles.h1}>Segurança</h1>
                <p>Tomamos medidas para manter a confidencialidade e segurança das informações que você envia. Não armazenamos informações pessoais, exceto nos casos em que queremos oferecer recursos específicos ou serviços solicitados por nossos clientes.</p>
                <Link href={'/'}>
                    <h6 className={styles.link}>Voltar</h6>
                </Link>
            </section>
            <Footer />
        </main>
    )
}
