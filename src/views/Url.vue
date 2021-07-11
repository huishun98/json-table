<template>
  <div class="url">
    <h1>{{ queryUrl }}</h1>
    <b-button pill variant="outline-secondary" @click="downloadJson"
      >Download JSON</b-button
    >
    <b-button pill variant="outline-secondary" @click="downloadCsv"
      >Download CSV</b-button
    >
    <div
      v-for="(item, index) in collatedInfo"
      :key="index"
      class="margin-bot-50"
    >
      <div
        class="title"
        v-bind:class="{ specialbg: item.header == firstLevelText }"
      >
        {{ item.header }}
      </div>
      <div class="table-wrapper">
        <b-table striped hover :items="item.info"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Url",
  props: ["queryUrl"],
  data() {
    return {
      firstLevelText: "Origin",
      downloadFileName: "json-table",
      collatedInfo: [],
      jsonData: null,
    };
  },

  mounted() {
    axios
      .get("https://api.allorigins.win/raw?url=" + this.queryUrl)
      .then((response) => {
        this.jsonData = response.data;
        this.generateData(this.firstLevelText, response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error encountered while fetching data");
      });
  },
  methods: {
    getHeaders(data) {
      return Object.keys(data);
    },
    type(data) {
      const response = Object.prototype.toString.call(data);
      switch (response) {
        case "[object Array]":
          return Array;
        case "[object String]":
          return String;
        case "[object Number]":
          return Number;
        case "[object Object]":
          return Object;
        case "[object Boolean]":
          return Boolean;
        default:
          return null;
      }
    },
    generateData(headerParam, data) {
      if (this.type(data) == Array) {
        let info = data;
        if (
          this.type(data[0]) == String ||
          this.type(data[0]) == Number ||
          this.type(data[0]) == Boolean
        ) {
          info = data.map((x) => {
            return {
              value: x,
            };
          });
        }
        this.collatedInfo.push({
          header: headerParam,
          info: info,
        });
        //   this.info = response.data;
      } else if (this.type(data) == Object) {
        const headers = this.getHeaders(data);

        let prepare = {};

        for (const header of headers) {
          const nextData = data[header];

          if (
            this.type(nextData) == String ||
            this.type(nextData) == Number ||
            this.type(nextData) == Boolean
          ) {
            prepare[header] = nextData;
            continue;
          } else if (this.type(nextData) == Object) {
            this.generateData(header, data[header]);
          } else if (this.type(nextData) == Array) {
            this.generateData(header, data[header]);
          }
        }

        if (Object.keys(prepare).length > 0) {
          this.collatedInfo.unshift({
            header: headerParam,
            info: Array(prepare),
          });
          //   this.generateData(headerParam, Array(prepare));
        }
      }
    },
    downloadJson() {
      const content = JSON.stringify(this.jsonData);
      this.handleDownload(this.downloadFileName, "json", content);
    },
    downloadCsv() {
      for (const tableInfo of this.collatedInfo) {
        console.log({ tableInfo });
        const data = tableInfo.info;
        const keys = Object.keys(data[0]);
        let csv = `\ufeff${keys.join()}\n`;
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          let line = keys
            .map((key) => {
              if (item[key] === null) {
                return null;
              } else if (this.type(item[key]) == Object) {
                return JSON.stringify([item[key]]);
              } else {
                return [item[key]];
              }
            })
            .join(",");
          csv += `${line}\n`;
        }
        this.handleDownload(
          this.downloadFileName + "-" + tableInfo.header,
          "csv",
          csv
        );
      }
    },
    handleDownload(fileName, fileType, content) {
      const blob = new Blob([content], {
        type: `application/${this.fileType}`,
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${fileName}.${fileType}`;
      link.click();
    },
  },
};
</script>