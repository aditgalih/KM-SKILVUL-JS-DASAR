153 lines (145 sloc)  6.46 KB
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

  <title>Hello, world!</title>
</head>

<body>
  <div class="container py-5">
    <div class="row">
      <!-- COL -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
        <!-- CARD -->
        <div id="card-01" class="card" onclick="onClickCard('card-01')">
          <img id="card-01-image"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
            class="card-img-top" alt="skilvul" />
          <div class="card-body">
            <h5 id="card-01-title" class="card-title text-capitalize">
              milk based coffee
            </h5>
            <p id="card-01-text" class="card-text d-none">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a card-id="01" href="#" class="stretched-link btn-modal" data-bs-toggle="modal"
              data-bs-target="#detail-article"></a>
          </div>
        </div>
      </div>
      <!-- COL -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
        <!-- CARD -->
        <div id="card-02" class="card" onclick="onClickCard('card-02')">
          <img id="card-02-image"
            src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
            class="card-img-top" alt="skilvul" />
          <div class="card-body">
            <h5 id="card-02-title" class="card-title text-capitalize">
              v60 coffee
            </h5>
            <p id="card-02-text" class="card-text d-none">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a card-id="02" href="#" class="stretched-link btn-modal" data-bs-toggle="modal"
              data-bs-target="#detail-article"></a>
          </div>
        </div>
      </div>
      <!-- COL -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
        <!-- CARD -->
        <div id="card-03" class="card" onclick="onClickCard('card-03')">
          <img id="card-03-image"
            src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
            class="card-img-top" alt="skilvul" />
          <div class="card-body">
            <h5 id="card-03-title" class="card-title text-capitalize">
              coffee roastery
            </h5>
            <p id="card-03-text" class="card-text d-none">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a card-id="03" href="#" class="stretched-link btn-modal" data-bs-toggle="modal"
              data-bs-target="#detail-article"></a>
          </div>
        </div>
      </div>
      <!-- COL -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
        <!-- CARD -->
        <div id="card-04" class="card" onclick="onClickCard('card-04')">
          <img id="card-04-image"
            src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
            class="card-img-top" alt="skilvul" />
          <div class="card-body">
            <h5 id="card-04-title" class="card-title text-capitalize">
              coffee grinder
            </h5>
            <p id="card-04-text" class="card-text d-none">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a card-id="04" href="#" class="stretched-link btn-modal" data-bs-toggle="modal"
              data-bs-target="#detail-article"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="detail-article" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="modal-title">
              Modal title
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="" class="modal-body">
            <div class="row">
              <div class="col">
                <img id="modal-image" src="" class="w-100" alt="skilvul" />
              </div>
              <div class="col">
                <p id="modal-text">Modal Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
    // ----------- Answer -----------
    // Membuat variabel baru untuk mengambil seluruh elemen dari modal
    const queryBtnModal = document.querySelectorAll('.btn-modal')
    const idModalTitle = document.getElementById('modal-title')
    const idModalImage = document.getElementById('modal-image')
    const idModalText = document.getElementById('modal-text')

    // Mengambil seluruh content dari katalog yang sedang aktif
    const onClickCard = (id) => {
      const cardTitle = document.getElementById(`${id}-title`)
      const cardText = document.getElementById(`${id}-text`)
      const cardImage = document.getElementById(`${id}-image`)
      // Mengganti seluruh content yang ada didalam modal dengan isi dari katalog
      idModalTitle.innerHTML = cardTitle.innerHTML
      idModalText.innerHTML = cardText.innerHTML
      idModalImage.setAttribute('src', cardImage.getAttribute('src'))
    }
  </script>

  <!-- Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
</body>

</html>
