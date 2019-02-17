<template>
  <div id="about">
    <v-container>
      <h2>会社概要</h2>
      <table class="company">
        <tbody>
          <tr>
            <th class="arrow_box">会社名</th>
            <td>株式会社OverPage
              <br>OverPage,Inc.
            </td>
          </tr>
          <tr>
            <th class="arrow_box">設立年月日</th>
            <td>2018年8月24日</td>
          </tr>
          <tr>
            <th class="arrow_box">本店所在地</th>
            <td>〒135-0047
              <br>東京都江東区富岡１丁目２５番５号
            </td>
          </tr>
          <!-- <tr>
          <th>TEL</th>
          <td>
          03-6240-1253
          </td>
          </tr>-->
          <tr>
            <th class="arrow_box">企業理念</th>
            <td>「空間インターフェースで価値のあるネットワークを創る」</td>
          </tr>
          <tr>
            <th class="arrow_box">代表者</th>
            <td>田中 俊也</td>
          </tr>
          <tr>
            <th class="arrow_box">資本金</th>
            <td>100万円</td>
          </tr>
          <tr>
            <th class="arrow_box">社員数</th>
            <td>1人</td>
          </tr>
          <tr>
            <th class="arrow_box">事業内容</th>
            <td>・web、MixedReality、Blockchain等の次世代インターネットに関する調査及び研究開発
              <br>・インターネットサービス及びコンテンツの企画、開発並びに販売、運営
            </td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
  background: white;
  max-width: 780px;
  margin: 16px auto 16px;
  padding: 32px 24px;
  border-radius: 3px;

  a {
    display: block;
    text-align: center;
    background: #039be5;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    padding: 16px;
    border-radius: 4px;
  }
}
#about,
#about a {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
#load {
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 13px;
}

table.company {
  max-width: 780px;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px 15px;
  font-size: 12px;

  th,
  td {
    padding: 10px;
  }

  th {
    background: #295890;
    vertical-align: middle;
    text-align: left;
    max-width: 200px;
    min-width: 100px;
    overflow: visible;
    position: relative;
    color: #fff;
    font-weight: normal;
    font-size: 15px;
  }

  th.arrow_box:after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-left-color: #295890;
    border-width: 10px;
    margin-top: -10px;
  }

  td {
    background: #f8f8f8;
    max-width: 680px;
    padding-left: 20px;
  }
}
</style>